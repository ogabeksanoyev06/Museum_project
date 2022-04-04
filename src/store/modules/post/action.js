export const getPostItems = ({ commit }) => {
	then(response => {
		commit('SET_POST', response.data);
	});
};
