import React from 'react';
import {
  SearchBox,
  RefinementListFilter,
  HitsStats,
  SearchkitComponent,
  SelectedFilters,
  HierarchicalMenuFilter,
  Pagination,
  ResetFilters,
  SearchkitManager,
  SearchkitProvider,
  Layout,
  TopBar,
  LayoutBody,
  SideBar,
  LayoutResults,
  ActionBar,
  ActionBarRow,
  SortingSelector,
  InputFilter,
  ViewSwitcherToggle,
  RangeFilter
} from "searchkit";
import DateRangeFilter from './DateRangeFilter'
import Samples from './Samples';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

const searchkit = new SearchkitManager("https://search-pedidos-dev-4rtoq2jtrckjskj25rghj3t5fy.eu-west-1.es.amazonaws.com/pedidos");

class App extends SearchkitComponent {

  state = {
    date: [new Date(), new Date()]
  }

  onChange = date => this.setState({ date })

  //Función que añade 0 en caso de que el mes o el día sea inferior a 10
  // addCero(n){
  //   if(n <= 9){
  //     return "0" + n;
  //   }
  //   return n
  // }

  //  //Función que formatea las fechas introducidas en el calendario de la interfaz y hace una consulta a elastic que devuelve datos parseados a JSON
  //  dataFilter(){
  //   let current_datetime = this.state.date[0];
  //   let dateA = current_datetime.getFullYear() + "/" + this.addCero(current_datetime.getMonth() + 1) + "/" + this.addCero(current_datetime.getDate())

  //   let current_datetimeB = this.state.date[1];
  //   let dateB = current_datetimeB.getFullYear() + "/" + this.addCero(current_datetimeB.getMonth() + 1) + "/" + this.addCero(current_datetimeB.getDate())

  //   let myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   let raw = JSON.stringify({"query":{"range":{"ACTUAL_DELIVERY_DAT":{"gte":dateA,"lte":dateB,"format":"yyyy/MM/dd"}}}});

  //   let requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };

  //   fetch("https://search-pedidos-dev-4rtoq2jtrckjskj25rghj3t5fy.eu-west-1.es.amazonaws.com/pedidos/_search?pretty", requestOptions)
  //     .then(response => response.text())
  //     .then((result) => {
  //       let resultJSON = JSON.parse(result)
  //       //orders tiene un array con los pedidos que obtenga de la consulta. Aquí es donde está dando problemas. Hemos intentado meter el array en el state con el código de abajo, pero si devuelve muchos pedidos tarda una barbaridad en meterlos en el array.
  //       let orders = resultJSON.hits.hits;
  //       /*this.setState({
  //         dataList: orders
  //       })*/
  //     })
  //     .catch(error => console.log('error', error));
  // }

  render(){

    return (
      <SearchkitProvider searchkit={searchkit}>
        <Layout>
          <TopBar>
          <div className="my-logo">Orders Search Engine</div>
          <div>
            <SearchBox
            autofocus={true}
            searchOnChange={true}
            placeholder="Order ID or Shipping Point"
            queryFields={["ORDER_ID","SHIPPINGPOINT_ID","ORDER_NUMBER","LNF_SITE_CITY","POOL_ID"]}/>
          </div>
          </TopBar>
          <LayoutBody>
            <SideBar>
              <HierarchicalMenuFilter
                fields={["LNF_SITE_CITY.keyword", "SHIPPINGPOINT_ID"]}
                title="Cities"
                id="cities"
                size={10}/>
              <InputFilter
                id="more_cities"
                title="More cities"
                placeholder="Search cities"
                searchOnChange={true}
                prefixQueryFields={["LNF_SITE_CITY"]}
                queryFields={["LNF_SITE_CITY"]}
               />
               <InputFilter
                id="person"
                title="Contact Person Signature"
                placeholder="Contact person"
                searchOnChange={true}
                prefixQueryFields={["CONTACT_PERSON_SIGNATURE_TXT"]}
                queryFields={["CONTACT_PERSON_SIGNATURE_TXT"]}
               />
              <RefinementListFilter
                id="delivery_date"
                title="Delivery date"
                field="ACTUAL_DELIVERY_DAT"
                operator="AND"
                size={10}
                />
                <RangeFilter
                  id='event_date_filter'
                  title='Event Date Filter'
                  field={ 'ACTUAL_DELIVERY_DAT' }
                  rangeComponent={ DateRangeFilter }
                  min={ 946684800000 }
                  max={ new Date().getTime() }
                />
            </SideBar>
            <LayoutResults>
              <ActionBar>
                <ActionBarRow>
                  <HitsStats/>
                  <ViewSwitcherToggle/>
                  <SortingSelector options={[
                    {label:"Latest Delivery Date", field:"ACTUAL_DELIVERY_DAT", order:"desc"},
                    {label:"Earliest Delivery Date", field:"ACTUAL_DELIVERY_DAT", order:"asc"}
                  ]}/>
                </ActionBarRow>
                <ActionBarRow>
                  <SelectedFilters/>
                  <ResetFilters/>
                </ActionBarRow>
              </ActionBar>
              <Samples />
              <Pagination showNumbers={true}/>
            </LayoutResults>
          </LayoutBody>
        </Layout>
      </SearchkitProvider>
    );
  }
}

export default App;



