export const mutations =  {
    CHANGE_CURRENT_TAB: (state,tab) => {
        localStorage.setItem('current_tab',tab)
        state.current_tab = tab
    },
}
