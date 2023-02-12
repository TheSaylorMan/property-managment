import Filter from "/components/Filters/Filters.js";
import Header from "/components/Header/Header.js";
import Table from "/components/Table/Table.js";

const mainWrapper = document.querySelector('.main-wrapper');

mainWrapper.appendChild(Header());
mainWrapper.appendChild(Filter());
mainWrapper.appendChild(Table());