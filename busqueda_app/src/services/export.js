import React from "react";
import styled from "styled-components";

const A = styled.a`
  font-size: 1.4rem;
  color: ${({ color }) => color};
`;

// SE LE PUEDE PASAR LOS DATOS, EL NOMBRE DEL ARCHIVO, EL NOMBRE DEL LINK DE DESCARGA Y EL COLOR DEL TEXTO
const Export = ({ data, filename, btnName, color }) => {
  let dataParsed = [];
  let headers = [];
  let newElement = new Map();
  data.forEach((elemento) => {
    for (const key in elemento) {
      if (elemento.hasOwnProperty(key)) {
        if (elemento !== null && typeof elemento[key] === "object") {
          let element = elemento[key];
          for (let index = 0; index < element.length; index++) {
            if (headers.indexOf(key + "." + index) === -1) {
              headers.push(key + "." + index);
            }
            newElement.set(key + "." + index, element[index]);
          }
          delete elemento[key];
        } else {
          if (headers.indexOf(key) === -1) {
            headers.push(key);
          }
          newElement.set(key, elemento[key]);
        }
      }
    }
    dataParsed.push(Object.fromEntries(newElement.entries()));
  });

  const convertToCSV = (objArray, headers) => {
    const items = objArray;
    const replacer = (key, value) => (value === null ? "" : value); // specify how you want to handle null values here
    const header = headers;
    let csv = items.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(",")
    );
    csv.unshift(header.join(","));
    csv = csv.join("\n");
    return csv;
  };

  let csvData = convertToCSV(dataParsed, headers);
  const blob = new Blob([csvData], { type: "text/csv", headers: headers });
  const url = URL.createObjectURL(blob);
  let exportName = filename ? filename + ".csv" : "export";
  return (
    <A href={url} download={exportName} color={color}>
      {btnName}
    </A>
  );
};

export default Export;
