export const MapList = ({ regions, onClick }) => {
  return (
    <ul>
      {regions.map(region => {
        return (
          <li key={region}>
            <button type="button" onClick={() => onClick(region)}>
              {region}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
