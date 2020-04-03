import React from 'react';
import {
  SearchkitComponent,
  NoHits,
  ViewSwitcherHits,
} from "searchkit";

const OrderHitsGridItem = (props) => {
const {result, bemBlocks} = props
const source = result._source
return (
  <div className={bemBlocks.item().mix(bemBlocks.container("item"))}>
    <ul> <h3>Order Details:</h3>
      <li className={bemBlocks.item("ACTUAL_DELIVERY_DAT")}>Actual Delivery Date: {source.ACTUAL_DELIVERY_DAT}</li>       
      <li className={bemBlocks.item("ORDER_ID")}>Order ID: {source.ORDER_ID}</li>       
      <li className={bemBlocks.item("LNF_SITE_CITY")}>City: {source.LNF_SITE_CITY}</li>        
      <li className={bemBlocks.item("SHIPPINGPOINT_ID")}>Shipping Point: {source.SHIPPINGPOINT_ID}</li>   
      <li className={bemBlocks.item("CONTACT_PERSON_SIGNATURE_TXT")}>Contact Person Signature: {source.CONTACT_PERSON_SIGNATURE_TXT}</li>   
      <li className={bemBlocks.item("COMMERCIAL_DISTANCE_M")}>Commercial Distance: {source.COMMERCIAL_DISTANCE_M}</li>   
      <li className={bemBlocks.item("DELIVERY_TYPE_CD")}>Delivery Type: {source.DELIVERY_TYPE_CD}</li>   
      <li className={bemBlocks.item("TRANSPORT_DISTANCE_M")}>Transport Distance: {source.TRANSPORT_DISTANCE_M}</li>   
      <li className={bemBlocks.item("TRANSPORT_DURATION_MIN")}>Transport Duration Min: {source.TRANSPORT_DURATION_MIN}</li>   
      </ul>
  </div>
)
}

const OrderHitsListItem = (props)=> {
const {bemBlocks, result} = props  
const source = result._source
return (
  <div className={bemBlocks.item().mix(bemBlocks.container("item"))} data-qa="hit">
    <div className={bemBlocks.item("details")}>
      <ul> <h3>Order Details:</h3>
        <li className={bemBlocks.item("ACTUAL_DELIVERY_DAT")}>Actual Delivery Date: {source.ACTUAL_DELIVERY_DAT}</li>       
        <li className={bemBlocks.item("ORDER_ID")}>Order ID: {source.ORDER_ID}</li>       
        <li className={bemBlocks.item("LNF_SITE_CITY")}>City: {source.LNF_SITE_CITY}</li>       
        <li className={bemBlocks.item("SHIPPINGPOINT_ID")}>Shipping Point: {source.SHIPPINGPOINT_ID}</li>
        <li className={bemBlocks.item("DELIVERY_TYPE_CD")}>Delivery Type: {source.DELIVERY_TYPE_CD}</li>   
        <li className={bemBlocks.item("CONTACT_PERSON_SIGNATURE_TXT")}>Contact Person Signature: {source.CONTACT_PERSON_SIGNATURE_TXT}</li>   
        <li className={bemBlocks.item("COMMERCIAL_DISTANCE_M")}>Commercial Distance: {source.COMMERCIAL_DISTANCE_M}</li>   
        <li className={bemBlocks.item("TRANSPORT_DISTANCE_M")}>Transport Distance: {source.TRANSPORT_DISTANCE_M}</li>   
        <li className={bemBlocks.item("TRANSPORT_DURATION_MIN")}>Transport Duration Minutes: {source.TRANSPORT_DURATION_MIN}</li>    
      </ul>     
    </div>
  </div>
)
}

const OrderHitsTable = (props) => {  
const {hits} = props;
return (
  <div style={{width: '100%', boxSizing: 'border-box', padding: 8}}>
    <table className="sk-table sk-table-striped">
      <thead>
        <tr>
          <th>Actual Delivery Date</th>
          <th>ORDER_ID</th>
          <th>City</th>
          <th>Shipping Point</th>
          <th>Delivery Type</th>
          <th>Contact Person Signature</th>
          <th>Commercial Distance</th>
          <th>Transport Distance</th>
          <th>Transport Duration Minutes</th>
        </tr>
      </thead>
      <tbody>
        {hits.map((hit) => {
          return (
            <tr key={hit._id}>
              <td>{hit._source.ACTUAL_DELIVERY_DAT}</td>
              <td>{hit._source.ORDER_ID}</td>
              <td>{hit._source.LNF_SITE_CITY}</td>
              <td>{hit._source.SHIPPINGPOINT_ID}</td>
              <td>{hit._source.DELIVERY_TYPE_CD}</td>
              <td>{hit._source.CONTACT_PERSON_SIGNATURE_TXT}</td>
              <td>{hit._source.COMMERCIAL_DISTANCE_M}</td>
              <td>{hit._source.TRANSPORT_DISTANCE_M}</td>
              <td>{hit._source.TRANSPORT_DURATION_MIN}</td>
            </tr>
          )
          })
        }
      </tbody>
    </table>
  </div>
)  
}

class Samples extends SearchkitComponent {
  render(){
    return (
      <div>
          <ViewSwitcherHits
            hitsPerPage={16} 
            hitComponents={[
              {key:"grid", title:"Grid", itemComponent: OrderHitsGridItem, defaultOption:true},
              {key:"list", title:"List", itemComponent: OrderHitsListItem},
              {key:"table", title:"Table", listComponent: OrderHitsTable}
            ]}
            scrollTo="body"
          />
          <NoHits 
            translations={{
              "NoHits.NoResultsFound":"No results were found for {query}",
            }}
          />
      </div> 
    )
  } 
}

export default Samples;


  