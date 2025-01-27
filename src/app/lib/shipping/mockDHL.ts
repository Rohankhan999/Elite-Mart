// Rate Calculator
export const calculateShippingRate = (weight: number, country: 'United States' | 'United Kingdom' | 'Canada' | 'Australia') => {
  const baseRates: { [key in 'United States' | 'United Kingdom' | 'Canada' | 'Australia']: number } = {
    'United States': 25,
    'United Kingdom': 35,
    'Canada': 30,
    'Australia': 40
  };
  
  const weightMultiplier = weight > 5 ? 1.5 : 1;
  return baseRates[country] * weightMultiplier;
};

// Tracking System
export const getTrackingInfo = (trackingId: string) => {
  return {
    status: 'In Transit',
    location: 'Local Distribution Center',
    estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    updates: [
      { time: '2023-12-01', status: 'Package Received' },
      { time: '2023-12-02', status: 'In Transit' }
    ]
  };
};

// Location Finder
export const findNearbyLocations = (postalCode: string) => {
  return [
    { name: 'DHL Store Downtown', distance: '0.5 miles', address: '123 Main St' },
    { name: 'DHL Express Center', distance: '1.2 miles', address: '456 Park Ave' }
  ];
};

// Address Validator
export const validateAddress = (address: string, postalCode: string) => {
  const isValidPostal = /^\d{5}(-\d{4})?$/.test(postalCode);
  const isValidAddress = address.length > 10;
  
  return {
    isValid: isValidPostal && isValidAddress,
    suggestions: ['123 Main St', '456 Park Ave']
  };
};
