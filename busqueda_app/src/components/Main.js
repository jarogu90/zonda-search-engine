import React from "react";

//Librería de Searchkit
import {
  HitsStats,
  SearchkitComponent,
  SelectedFilters,
  ResetFilters,
  SearchkitManager,
  SearchkitProvider,
  Layout,
  TopBar,
  LayoutBody,
  LayoutResults,
  ActionBar,
  ActionBarRow,
  QueryAccessor,
  ImmutableQuery,
  BoolMust,
  RangeQuery,
  RangeFilter,
  RangeAccessor,
} from "searchkit";

//Componentes manuales
import Samples from "./Samples";
import InputFilterSection from "./InputFilterSection";
import Sidebar from "./Sidebar";
import NoResults from "./NoResults";
import { formatDate } from "../utils/Utils";

//Configuración del json para filtros y endpoint
import config from "../config.json";

//Imports para las fechas
import { DatePicker } from "antd";
import { dateRange } from "../queries/rangeDateQuery";

const searchkit = new SearchkitManager(config.endpoint);

//const accessorTo = new QueryAccessor("dateTo");

//searchkit.addAccessor(accessorTo);

const { RangePicker } = DatePicker;

class Main extends SearchkitComponent {
  state = {
    cleanDate: false,
    startDate: null,
    endDate: null,
    arraydata: [],
    value: null,
    noResults: false,
  };

  changeQuery(val) {
    /*const formatedStartDate = new Date(formatDate(val[0]._d)).getTime();
    const formatedEndDate = new Date(formatDate(val[1]._d)).getTime();

    const accessor = new RangeAccessor("dates", {
      title: "Dates",
      id: "dates",
      min: formatedStartDate, //946722254000,
      max: formatedEndDate, //new Date().getTime(),
      field: "DELIVERY_FROM_DAT",
      loadHistogram: false,
    });

    searchkit.addAccessor(accessor);
    accessor.state = accessor.state.setValue([
      formatedStartDate,
      formatedEndDate,
    ]);

    const query = new ImmutableQuery().setSize(10).addQuery(
      BoolMust(
        RangeQuery("dates", {
          gte: accessor.state.value[0],
          lte: accessor.state.value[1],
        })
      )
    );

    console.log(searchkit);*/

    const formatedStartDate = formatDate(val[0]._d);
    const formatedEndDate = formatDate(val[1]._d);

    const accessor = new QueryAccessor("dates", {
      title: "Dates",
      id: "dates",
      prefixQueryFields: ["DELIVERY_FROM_DAT"],
      prefixQueryOptions: {
        fields: ["DELIVERY_FROM_DAT"],
      },
      addToFilters: true,
      onQueryStateChange: () => {
        searchkit.performSearch(true, true);
      },
    });

    searchkit.addAccessor(accessor);
    accessor.state = accessor.state.setValue([
      formatedStartDate,
      formatedEndDate,
    ]);

    const query = new ImmutableQuery();
    const newQuery = query.setSize(10).buildQuery(
      BoolMust(
        RangeQuery("dates", {
          gte: accessor.state.value[0],
          lte: accessor.state.value[1],
        })
      )
    );
    //console.log(newQuery);
    /*searchkit.setQueryProcessor(
      BoolMust(
        RangeQuery("dates", {
          gte: accessor.state.value[0],
          lte: accessor.state.value[1],
        })
      )
    );*/

    console.log(searchkit.currentSearchRequest);
  }

  DownloadButton(props) {
    const result = props.hits;
    if (result == 0) {
      return <></>;
    } else {
      return (
        <a
          href="/file/orders.csv"
          download="orders.csv"
          className="download-button-link"
        >
          CSV download
        </a>
      );
    }
  }

  CustomHitStats = (props) => {
    const { bemBlocks, hitsCount, timeTaken } = props;
    return (
      <>
        <div className={bemBlocks.container()} data-qa="hits-stats">
          <div className={bemBlocks.container("info")} data-qa="info">
            {hitsCount} results found in {timeTaken}ms
          </div>
        </div>
        <this.DownloadButton hits={hitsCount} />
      </>
    );
  };

  changeCleanDateStatus = () => {
    this.setState({ arraydata: null });
  };

  //AQUI EMPIEZAN LAS FUNCIONES RELACIONADAS CON LAS FECHAS
  getData = (dateFrom, dateTo) => {
    dateRange(dateFrom, dateTo).then((res) => {
      if (res.hits.hits.length < 1) {
        this.setState({
          value: null,
          noResults: true,
        });
      }
      this.setState({ arraydata: res.hits.hits });
      this.setState({ dateFilterOn: true });
    });
  };

  onChange = (val) => {
    this.setState({ value: val, noResults: false });
    if (val === null) {
      this.changeCleanDateStatus();
      return;
    } else {
      const formatedStartDate = formatDate(val[0]._d);
      const formatedEndDate = formatDate(val[1]._d);
      this.setState({
        startDate: formatedStartDate,
        endDate: formatedEndDate,
      });
      this.getData(formatedStartDate, formatedStartDate);
    }
  };

  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <Layout>
          <TopBar className="header">
            <div className="my-logo">
              <div className="zonda-logo">
                <img src="zonda.png"></img>
              </div>
            </div>
          </TopBar>
          <LayoutBody>
            <div onClick={this.changeQuery}>AAAAA</div>
            <Sidebar></Sidebar>
            <LayoutResults className="layout">
              <ActionBar>
                {/* <RangePicker
                  value={this.state.value}
                  onChange={this.onChange}
                /> */}
                <RangePicker
                  value={this.state.value}
                  onChange={this.changeQuery}
                  id="dates"
                  title="Dates"
                />
                <InputFilterSection></InputFilterSection>
                <ActionBarRow>
                  <SelectedFilters />
                  <div onClick={this.changeCleanDateStatus}>
                    <ResetFilters onClick={this.changeCleanDateStatus} />
                  </div>
                </ActionBarRow>
                <div className="hitStats-download-container">
                  <HitsStats component={this.CustomHitStats} />
                </div>
              </ActionBar>
              {this.state.noResults ? (
                <NoResults
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                />
              ) : (
                <Samples dataDateFilter={this.state.arraydata} />
              )}
            </LayoutResults>
          </LayoutBody>
        </Layout>
      </SearchkitProvider>
    );
  }
}

export default Main;
