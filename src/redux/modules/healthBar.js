const GET_HEALTH_BAR_LIST = 'healthbar/GET_HEALTH_BAR_LIST';

export const getHealthBarListAction = data => ({
  type: GET_HEALTH_BAR_LIST,
  payload: {
    data
  }
});

const initialState = [];

export default function healthBar(state = initialState, action) {
  switch (action.type) {
    case GET_HEALTH_BAR_LIST:
      const healthBarData = Object.entries({ ...action.payload.data })
        .sort((a, b) => b[0].slice(0, 6) - a[0].slice(0, 6))
        .map(data => data[1]);

      if (healthBarData.length > 3) {
        return healthBarData.slice(0, 3);
      } else {
        return healthBarData;
      }
    default:
      return state;
  }
}
