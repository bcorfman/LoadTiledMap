import { _decorator, director, Canvas, Component, log, Vec3, TiledMap } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('positionCamera')
export class positionCamera extends Component {
    tiledMap: TiledMap;
    start() {
        this.tiledMap = this.node.getComponent(TiledMap);
        var locations = this.tiledMap.getObjectGroup('Locations');

        var startPoint = locations.getObject('PlayerStart');
        this.node.setPosition(new Vec3(startPoint.offset.x, startPoint.offset.y, 0));
    }
}

