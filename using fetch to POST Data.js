async function postData(data){
  const responce = await fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={92ca134678bbadeacf654a459e543151}",{
  method: "POST"  ,
  header: {"someKey": "someValue"},
  body: JSON, stringify(data)
});
  const result = await.responce.json();
  return result;
}
