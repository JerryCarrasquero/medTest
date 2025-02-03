import { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const options = ["amarillo", "azul"];
export default function TraumaCard() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Traumatología</Text>
          <Text style={styles.subtitle}>Dr. José Pedro Sans</Text>
        </View>
        <Image source={require("./icons/Joints_Bone.png")} />
      </View>
      <View style={{ padding: 16 }}>
        <View
          style={{
            marginRight: 8,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image source={require("./icons/face_24px.png")} />
          <View style={{ marginLeft: 4 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Jorge Avendaño Pérez
            </Text>
            <Text style={{ fontSize: 14 }}>35 años</Text>
          </View>
        </View>
        <Text>
          <Text style={styles.label}>Ficha médica:</Text>
          77884
        </Text>
        <Text>
          <Text style={styles.label}>Diagnóstico:</Text>
          Calcificación Talón
        </Text>
        <Text>
          <Text style={styles.label}>Intervención:</Text>
          Extirpación en talón
        </Text>
        <Text>
          <Text style={styles.label}>Evaluación preanestésica:</Text>
          Sí
        </Text>
        <Text>
          <Text style={styles.label}>Tiempo de solicitud:</Text>3 días
        </Text>
        <Text>
          <Text style={styles.label}>Suspensiones:</Text>2
        </Text>
        <View style={styles.iconRow}>
          <Image source={require("./icons/Icon_Cardio.png")} />
          <Image source={require("./icons/Icon_Anestesia.png")} />
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Tipo de Urgencia</Text>
          <Picker
            style={styles.picker}
            selectedValue={selectedLanguage}
            pickerStyleType="Android"
            dropdownIconColor="#1E40AF"
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item
              value="Seleccionar"
              label="Seleccionar"
              enabled={false}
            />
            {options.map((j) => (
              <Picker.Item label={j} value={j} />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    maxWidth: 400,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  header: {
    backgroundColor: "#1E40AF",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
    fontSize: 14,
  },
  label: {
    fontWeight: "bold",
    color: "#1E40AF",
  },
  iconRow: {
    flexDirection: "row",
    marginTop: 16,
  },
  pickerContainer: {
    borderWidth: 1, // Outline border
    borderColor: "#1E40AF", // Border color
    borderRadius: 5, // Optional: rounded corners
    marginTop: 10,
  },
  pickerLabel: {
    fontWeight: "bold",
    color: "#1E40AF",
    marginTop: -10,
    marginLeft: 5,
    backgroundColor: "white",
    width: 120,
  },
  picker: {
    color: "#1E40AF",
  },
});
