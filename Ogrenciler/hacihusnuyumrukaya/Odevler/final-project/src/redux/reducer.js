let initialState = {
  data: [],
  alphabet:new Set(),
};
class Request {
  constructor(url) {
    this.url = url;
  }
  async get(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Veriler Alınamadı. `);
      }
      const responseData = await response.json();
      return responseData;
  }
  
}
const request = new Request("http://localhost:3002/data/");

export const dataReducer = (state = initialState, action) => {
  request
  .get("http://localhost:3002/data")
  .then((responseJson)=>{
    state.data=responseJson;
     })
  .catch((err) => console.log(err));
  let data1 = [...state.data]
  let data2 = [...state.data]
  const myData = data1
  .sort(function(a, b) {//sıralama
   if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
   if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
   return 0;
  })
//verilere göre alfabe çıkarma
  myData.map((object)=>{ 
    return  state.alphabet.add(object.title.substr(0,1).toUpperCase());
    })

  const myData2 = data2
  .sort(function(a, b) {//ters sıralama
   if(a.title.toLowerCase() < b.title.toLowerCase()) return 1;
   if(a.title.toLowerCase() > b.title.toLowerCase()) return -1;
   return 0;
  })

  switch (action.type) {
    case "A-Z":
      return { data:  myData , alphabet:state.alphabet } ;
    case "Z-A":
      return { data: myData2,alphabet:state.alphabet};
 
    default:
      return state;
  }
};
