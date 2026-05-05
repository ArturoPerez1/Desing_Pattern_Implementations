import { RoadLogistics, SeaLogistics } from "./Factory_Method.ts";

const roadLogistics = new RoadLogistics();
const seaLogistics = new SeaLogistics();

roadLogistics.planDelivery();
seaLogistics.planDelivery();
