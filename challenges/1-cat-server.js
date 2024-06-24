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

function fetchAllOwners() {}

function fetchCatsByOwner() {}

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
