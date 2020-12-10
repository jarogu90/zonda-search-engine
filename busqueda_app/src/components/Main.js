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
  SimpleQueryString,
  setQueryString,
  AxiosESTransport,
  FilteredQuery,
} from "searchkit";

//Componentes manuales
import Samples from "./Samples";
import InputFilterSection from "./InputFilterSection";
import TopBarHeader from "./TopBarHeader";
import Sidebar from "./Sidebar";
import NoResults from "./NoResults";
import { formatDate } from "../utils/Utils";

//Configuración del json para filtros y endpoint
import config from "../config.json";

//Imports para las fechas
import { DatePicker } from "antd";
import { dateRange } from "../queries/rangeDateQuery";

import DatesFilter from "./DatesFilter";

import Download from "../img/download";

export const searchkit = new SearchkitManager(config.endpoint);
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

  DownloadButton(props) {
    const result = props.hits;
    if (result == 0) {
      return <></>;
    } else {
      return (
        <a
          className="download-button-link"
          href="/file/orders.csv"
          download="orders.csv"
        >
          <Download color="var(--ocean-blue)"></Download>
          <p>Download data</p>
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
            <span className="info_numbers">{hitsCount}</span> results found in{" "}
            <span className="info_numbers">{timeTaken}ms</span>
          </div>
        </div>
        <this.DownloadButton hits={hitsCount} />
      </>
    );
  };

  changeCleanDateStatus = () => {
    this.setState({ arraydata: null });
  };

  /*getData = (dateFrom, dateTo) => {
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
  };*/

  render() {
    const { state } = this.props;
    return (
      <SearchkitProvider searchkit={searchkit}>
        <Layout>
          <TopBarHeader></TopBarHeader>
          <LayoutBody>
            <Sidebar />
            <LayoutResults className="layout">
              <ActionBar>
                <DatesFilter />
                <InputFilterSection />
                <ActionBarRow>
                  <SelectedFilters />
                  <div
                    className="resetfilters"
                    onClick={this.changeCleanDateStatus}
                  >
                    <ResetFilters onClick={this.changeCleanDateStatus} />
                  </div>
                </ActionBarRow>
                <div className="hitStats-download-container">
                  <HitsStats component={this.CustomHitStats} />
                </div>
              </ActionBar>
              <Samples dataDateFilter={this.state.arraydata} />
            </LayoutResults>
          </LayoutBody>
        </Layout>
      </SearchkitProvider>
    );
  }
}

export default Main;
