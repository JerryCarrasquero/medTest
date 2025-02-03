const fetchEmergencyKinds = async () => {
  try {
    const response = await fetch(
      "https://wisemed-interview.s3.us-east-2.amazonaws.com/react-native/emergency-kinds.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    throw err.message;
  }
};
export { fetchEmergencyKinds };
