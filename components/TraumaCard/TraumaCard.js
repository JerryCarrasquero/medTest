import { View, Text, Image } from "react-native";

export default function TraumaCard() {
  return (
    <View
      style={{
        maxWidth: 400,
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        borderWidth: 1,
        borderColor: "#ccc",
      }}
    >
      <View
        style={{
          backgroundColor: "#1E40AF",
          padding: 16,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Traumatología
          </Text>
          <Text style={{ color: "white", fontSize: 14 }}>
            Dr. José Pedro Sans
          </Text>
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
          <View style={{marginLeft:4}}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Jorge Avendaño Pérez
            </Text>
            <Text style={{ fontSize: 14 }}>35 años</Text>
          </View>
        </View>
        <Text>
          <Text style={{ fontWeight: "bold", color: "#1E40AF" }}>
            Ficha médica:
          </Text>{" "}
          77884
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold", color: "#1E40AF" }}>
            Diagnóstico:
          </Text>{" "}
          Calcificación Talón
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold", color: "#1E40AF" }}>
            Intervención:
          </Text>{" "}
          Extirpación en talón
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold", color: "#1E40AF" }}>
            Evaluación preanestésica:
          </Text>{" "}
          Sí
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold", color: "#1E40AF" }}>
            Tiempo de solicitud:
          </Text>{" "}
          3 días
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold", color: "#1E40AF" }}>
            Suspensiones:
          </Text>{" "}
          2
        </Text>
        <View style={{ flexDirection: "row", marginTop: 16 }}>
          <Image source={require("./icons/Icon_Cardio.png")} />
          <Image source={require("./icons/Icon_Anestesia.png")} />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text style={{ fontWeight: "bold", color: "#1E40AF" }}>
            Tipo de Urgencia
          </Text>
        </View>
      </View>
    </View>
  );
}
