import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getGames = createAsyncThunk("games/getGames", async (name) => {
    return await fetch(`http://localhost:3004/datas${name ? "/" + name : ''}`)
        .then(res => res.json())
        .catch((err) => console.log(err))

})

export const getFilter = createAsyncThunk("games/getFilter", async (name) => {
    return await fetch(`http://localhost:3004/datas?title=${name ? "/" + name : ''}`)
        .then(res => res.json())
        .catch((err) => console.log(err))

})
export const gameSlice = createSlice({
    name: "games",
    initialState: {
        games: [],
        filtered: [],
        gourupedGames: [],
        loading: false,
        error: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getGames.fulfilled, (state, action) => {
            let arr = []
            let arr2 = []
            action.payload.map(element => {

                let firstLatter = element.title[0];
                if (arr.filter(item => { return item.firstletter == firstLatter }).length > 0 && arr.length > 0) {
                    arr.map(el => {
                        if (el.firstletter == firstLatter) {
                            el.elements.push(element)
                        }
                    })
                } else {
                    let obj = { firstletter: "", elements: [] }
                    obj.firstletter = firstLatter
                    obj.elements.push(element)
                    arr.push(obj)
                }



            });
            // builder.addCase(getFilter.fulfilled, (state, action) => {
            //     action.payload.map(el => {

            //         state.filtered = state.games.map((game) => {
            //             if (game.title == el.title) {
            //                 arr2.push(game.title.toLowerCase())
            //             }

            //         })

            //     });
             

            // })



            state.games = action.payload
            state.gourupedGames = arr
            // state.filtered = arr2

        })

    }
});

export const selectGames = (state) => state.app.games
export const selectFilteredGames = (state) => state.app.filtered
export const selectGroupedGames = (state) => state.app.gourupedGames;

export default gameSlice.reducer;