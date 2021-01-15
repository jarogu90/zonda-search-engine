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
} from "searchkit";

//Componentes manuales
import Samples from "./Samples";
import InputFilterSection from "./InputFilterSection";
import TopBarHeader from "./TopBarHeader";
import Sidebar from "./Sidebar";
import Pill from "./Pill";
//import NoResults from "./NoResults";

//Configuración del json para endpoint
import { endpoint } from "../config.json";

//Imports para las fechas
/* import { DatePicker } from "antd";
import { dateRange } from "../queries/rangeDateQuery";
import DatesRangeFilter from "./DatesRangeFilter"; */

const searchkit = new SearchkitManager(endpoint);

class Main extends SearchkitComponent {
  state = {
    cleanDate: false,
    //startDate: null,
    //endDate: null,
    //arraydata: [],
    value: null,
    noResults: false,
  };

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
      </>
    );
  };

  changeCleanDateStatus = () => {
    //this.setState({ arraydata: null });
    this.setState({ cleanDate: true });
  };

  turnFalseDateFilter = () => {
    this.setState({ cleanDate: false });
  };

  //AQUI EMPIEZAN LAS FUNCIONES RELACIONADAS CON LAS FECHAS
  /* getData = (dateFrom, dateTo) => {
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
  }; */

  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <Layout>
          <TopBarHeader></TopBarHeader>
          <LayoutBody>
            <Sidebar />
            <LayoutResults className="layout">
              <ActionBar>
                <InputFilterSection
                  cleanDate={this.state.cleanDate}
                  turnFalseDateFilter={this.turnFalseDateFilter}
                />
                <ActionBarRow>
                  <SelectedFilters
                    itemComponent={
                      <Pill setCleanDate={this.changeCleanDateStatus} />
                    }
                  />

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
              {/* CÓDIGO COMENTADO PARA LA QUERY MANUAL DE FECHAS 
              {this.state.noResults ? (
                <NoResults
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                />
              ) : (
                <Samples dataDateFilter={this.state.arraydata} />
              )} */}
              <Samples />
            </LayoutResults>
          </LayoutBody>
        </Layout>
      </SearchkitProvider>
    );
  }
}

export default Main;
