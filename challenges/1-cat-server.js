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


function fetchCatPics(catPicsNames,callBackFn) {
  const catPicNamesArray = []
  let counter = 0
  if(catPicsNames.length === 0){
    callBackFn(null,catPicsNames)
  }
  catPicsNames.forEach((cat) => {
    request(`/pics/${cat}`,(err,data) => {
      if(err !== null){
        catPicNamesArray.push('placeholder.jpg')
        counter++
      }else{
        catPicNamesArray.push(data)
        counter++
      }
      if(counter === catPicsNames.length){
        callBackFn(err,catPicNamesArray)
      }
    })
  })
}

function fetchAllCats(callBackFn) {
  callBackFn(err,fetchAllOwners,fetchCatsByOwner)
  
}

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
