export const getters = {
    money: state => state.money,
    token: state => state.auth.token,
    name: state => state.auth.name,
    phone: state => state.auth.phone,
    role: state => state.auth.role,
    current_tab: state => state.current_tab
}
