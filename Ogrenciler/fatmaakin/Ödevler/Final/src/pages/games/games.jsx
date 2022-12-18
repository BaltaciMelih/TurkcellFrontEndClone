import React, { useState, useEffect } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import axios from "axios";







const games = () => {

    const [data, setData] = useState([]);

    const [searchFilter, setSearchFilter] = useState([]);

    const [result, setResult] = useState("");

    const [filtergame, setfiltergame] = useState("");





    // useEffect(() => {

    //     fetch('https://jsonplaceholder.typecode.com/users')

    //         .then(resp => resp.json())

    //         .then((data) => setSearchFilter(data))

    //         .catch((error) => console.log({ error }));

    // }, []);





    useEffect(() => {

        const fetchData = async () => {

            // try{

            const resp = await axios.get('http://localhost:8000/data');

            setData(resp.data);

            setSearchFilter(resp.data);

            //}

            // catch(err){

            //   throw new Error(err);

            // }

        };

        fetchData();

    }, []);





    useEffect(() => {

        const results = searchFilter.filter(resp =>

            resp.title.toLowerCase().includes(result)

        );

        setData(results)

    }, [result])

    //console.log(data);





    const onChange = (evt) => {

        setResult(evt.target.value);

    }

    // useEffect(() => {

    //     const filtergame = searchFilter.filter(resp =>

    //         resp.genres.includes(result)

    //     );

    //     setData(filtergame)

    // }, [result])

    //console.log(data);





    // const filter = (evt) => {

    //     setResult(evt.target.value);

    // }

    const handleOnSearch = (string, results) => {
        console.log(string, results);
      };
    
      const handleOnHover = (result) => {
        console.log(result);
      };
    
      const handleOnSelect = (item) => {
        console.log(item);
      };
    
      const handleOnFocus = () => {
        console.log("Focused");
      };
    
      const handleOnClear = () => {
        console.log("Cleared");
      };
      const formatResult = (item) => {
        console.log(item);
        return (
          <div className="result-wrapper">
            <span className="result-span">id: {item.id}</span>
            <span className="result-span">name: {item.name}</span>
          </div>
        );
      };





    return (

        <div className="App">

            <input

                type="text"

                placeholder="Search here ... "

                value={result}

                onChange={onChange}

            />
                      <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            styling={{ zIndex: 4 }} // To display it on top of the search box below
            autoFocus
          />



            {data.map((r, i) => (

                <ul key={i}>

                    <li>{r.title}</li>

                </ul>

            )

            )}

        </div>

    );

}





export default games





// import React from 'react'

// import axios from 'axios'

// import { useState, useEffect } from 'react'





// const games = () => {

//     const [loading, setLoading] = useState(true);

//     const [data, setData] = useState([])

//     const [searchFilter, setSearchFilter] = useState([]);





//     useEffect(() => {

//         const fetchData = async () => {

//             setLoading(true);

//             try {

//                 const { data: response } = await axios.get('http://localhost:9000/data');

//                 setData(response)

//                 const genres = response.map(item => item.genres)

//                 const newPost = [...new Set(genres)]

//                 console.log(newPost)

//             } catch (error) {

//                 console.error(error.message);

//             }

//             setLoading(false);

//         }





//         fetchData();

//     }, []);

//     useEffect(() => {

//         const results = searchFilter.filter(resp =>

//             resp.name.toLowerCase().includes(result)

//         );

//         setData(results)

//     }, [result])

//     //console.log(data);





//     const onChange = (evt) => {

//         setResult(evt.target.value);

//     }

//     return (

//         <div>

//             {loading && <div>Loading</div>}

//             {!loading && (

//                 <div>

//                     <input

//                         type="text"

//                         placeholder="Search here ... "

//                         value={result}

//                         onChange={onChange}

//                     />

//                     <h2>Doing stuff with data</h2>

//                     {/* {data.map(item => (<span>{item.title}</span>))} */}

//                     {/* {data.map((item, i) => (<tr key={i}>

//                         <td>{item.genres}</td>

//                     </tr>))} */}

//                 </div>

//             )}

//         </div>

//     )

// }







// export default games

