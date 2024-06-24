const { bannerContent } = require('../utils/database');
const request = require('../utils/server');

function checkServerStatus(callBackFn) {
  request('/status',callBackFn)
}

function fetchBannerContent(callBackFn,...bannerContent) {
  request('/banner',(err,data) => {
    const newData = {...data}
    newData.copyrightYear = 2023
    callBackFn(err,newData)
  })
}

function fetchAllOwners(callBackFn) {
  request('/owners',(err,data) => {
    const newData = [...data] // lowercase owner names
    const lowerCaseNewData = newData.map( word => word.toLowerCase() )
    callBackFn(err,lowerCaseNewData)
  })
}

function fetchCatsByOwner(ownerName, callBackFn) {
  //request('/owners/' + ownerName + '/cats/',(err,data) => {
  request(`/owners/${ownerName}/cats/`,(err,data) => {
  callBackFn(err,data);
  })
}


function fetchCatPics() {}

function fetchAllCats() {}

function fetchOwnersWithCats() {}

function kickLegacyServerUntilItWorks() {}

function buySingleOutfit() {}

module.exports = {
  buySingleOutfit,
  checkServerStatus,
  kickLegacyServerUntilItWorks,
  fetchAllCats,
  fetchCatPics,
  fetchAllOwners,
  fetchBannerContent,
  fetchOwnersWithCats,
  fetchCatsByOwner
};
