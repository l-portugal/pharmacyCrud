import { useMapEvents } from 'react-leaflet'

export const EventClick = () => {
  const map = useMapEvents({
      click(e) {
          console.log(e.latlng);
      },
  });
  return null;
};