type SearchParameter = {
    startDate: string;
    endDate: string;
    tripType: 'round-trip' | 'one-way'; // Specific trip type options
    origin: string;
    destination: string;
    passengers: number;
    flightClass: 'economy' | 'business' | 'first-class';
    usingSkyMiles: boolean;
    promoCode: string | "";
}