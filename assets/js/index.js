import Header from "/components/Header/Header.js";
import filterBadges from "./data.js";
import Badge from "/components/Badge/Badge.js";
import Button from "/components/Button/Button.js";
import Filter from "/components/Filters/Filter.js";
import Table from "/components/Table/Table.js";

const mainWrapper = document.querySelector('.main-wrapper');

//mainWrapper.appendChild(Button("Add Deposit"));

/*filterBadges.forEach((badge) => {
    mainWrapper.appendChild(Badge(badge.text, badge.theme));
})*/

mainWrapper.appendChild(Header());
mainWrapper.appendChild(Filter());
mainWrapper.appendChild(Table());

