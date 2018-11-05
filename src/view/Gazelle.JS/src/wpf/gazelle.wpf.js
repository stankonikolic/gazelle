import { viewLoader } from "./ViewLoader";
import { bridge } from "./WpfBridge";
import ParserService from "../ParserService";
import RendererService from "../RendererService";
import BridgeMapper from "../BridgeMapper";
import GazelleService from "../GazelleService";

const context = {
    elementCache: {},
    collectionCache: {}
};

const mapper = new BridgeMapper(bridge);
const parserService = new ParserService(mapper, context);
const rendererService = new RendererService(parserService, context);
const gazelle = new GazelleService(mapper, viewLoader, parserService, rendererService, context);

bridge.start(gazelle);