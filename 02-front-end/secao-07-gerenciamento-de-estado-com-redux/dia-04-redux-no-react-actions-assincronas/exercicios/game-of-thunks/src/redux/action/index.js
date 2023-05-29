export const isLoading = () => ({
  type: 'REQUEST',
});

export const getNameFromAPI = (data) => ({
  type: 'SEARCH_NAME',
  payload: data,
});
export const getFetchError = (error) => ({
  type: 'FETCH_ERROR',
  error,
});

export const fetchApi = (name) => async (dispatch) => {
  try {
    const NOME_DO_PERSONAGEM = name;
    const URL = `https://anapioficeandfire.com/api/characters?name=${NOME_DO_PERSONAGEM}`;
    dispatch(isLoading());
    const response = await fetch(URL);
    const data = await response.json();
    dispatch(getNameFromAPI(data[0]));
  } catch (error) {
    dispatch(getFetchError(error));
  }
};
