import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8" },
  searchGroup: { backgroundColor: "#34967C", paddingTop: 56, paddingBottom: 24, paddingHorizontal: 16 },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 40,
    paddingLeft: 20,
    paddingRight: 6,
    paddingVertical: 6,
  },
  searchControlGroup: { flex: 1 },
  searchFormText: { fontSize: 14, color: "#161117" },
  searchControl: { color: "#898989", paddingVertical: 2 },
  searchButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#34967C",
    alignItems: "center",
    justifyContent: "center",
  },
  filterGroup: { flexDirection: "row", columnGap: 24, paddingHorizontal: 16, paddingVertical: 8 },
  filterContainer: { alignItems: "center", height: 56 },
  listingContainer: { flex: 1, paddingHorizontal: 16, paddingTop: 16 },
  paginationContainer: { alignItems: "center", paddingVertical: 24 },
  showMoreButton: { backgroundColor: "#161117", borderRadius: 24, paddingVertical: 12, paddingHorizontal: 32 },
  showMoreButtonText: { color: "white", fontSize: 16, fontWeight: "600" },
});

export { styles };
