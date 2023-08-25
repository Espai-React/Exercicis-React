import { useState } from "react";

const useShippingForm = (url) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		if (url) {
			let ignore = false;
			fetch(url)
				.then((res) => res.json())
				.then((data) => {
					if (!ignore) {
						setData(data);
					}
				});

			return () => {
				ignore = true;
			};
		}
	}, [url]);
	return data;
};

const ShippingForm = () => {
	const cities = useShippingForm(`/api/cities?country=${country}`);
	const [city, setCity] = useState(null);
	const areas = useShippingForm(city ? `/api/areas?city=${city}` : null);

	return <div></div>;
};

export default ShippingForm;
