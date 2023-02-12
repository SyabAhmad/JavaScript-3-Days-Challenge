 // Async/Await is a way to handle asynchronous
  // operations in a way that makes
  //  them appear to be synchronous.

  async function getData(){
    const response = await fetch("wwww.google.com");
    const data = await response.json();
    return data;
  }
  getData().then(data => console.log(data));

async function dataToGet(){
  try {
    const responce = await fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={92ca134678bbadeacf654a459e543151}');
    const data = await respnce.json();
    reurn data;
  } catch (e) {
    e.getMessage();
  }
};

dataToGet().then(data => console.log(data));


async function alldata(){
  const responceData = await fetch("API Key");
  const data = responceData.json();
  return data;
}
alldata().then(data => console.log(data));

/// to POST data
async function toPostData(abc){
  const data = await fetch("API Key",{
    method: "POST",
    header: {"somekey": "someValue"},
    body: JSON,stringify(abc);
  });
  const result = await data.json();
  return result;
}
console.log(toPostData("some Data to POST"));
