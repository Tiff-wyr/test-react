import React from "react";
import GGEditor, {
  Flow,
  RegisterNode,
  setAnchorPointsState,
  ItemPopover,
} from "gg-editor";
import { Popover } from "antd";
import "./index.css";

function GGEditorWrap() {
  const data = {
    nodes: [
      {
        id: "0",
        label: "Node",
        x: 50,
        y: 50,
        type: "customStartNode",
      },
      {
        id: "1",
        label: "Node",
        x: 50,
        y: 200,
        type: "customNode",
        img: "./logo192.png",
      },
    ],
    edges: [
      {
        // label: "Label",
        source: "0",
        // sourceAnchor: 1,
        target: "1",
        // targetAnchor: 0,
      },
    ],
  };

  return (
    <GGEditor
      style={{
        height: "800px",
      }}
    >
      <Flow
        className={"graph"}
        data={data}
        // graphConfig={{ defaultNode: { type: "customStartNode" } }}
        // graphConfig={{ defaultNode: { type: 'customStartNode' } }}
        // graphConfig={{ defaultNode: { type: 'customInternalNode', size: 50 } }}
      />
      <ItemPopover
        renderContent={(item, position) => {
          const { minY: top, centerX: left } = position;
          const content = <div>{item._cfg.model.label}</div>;
          return (
            <Popover
              visible={true}
              title="Title"
              arrowPointAtCenter
              content={content}
            >
              <div style={{ position: "absolute", top, left }} />
            </Popover>
          );
        }}
      />
      <RegisterNode
        name="customNode"
        config={{
          draw(model, group) {
            const keyShape = group.addShape("rect", {
              draggable: true,
              attrs: {
                x: 0,
                y: 0,
                width: 40,
                height: 40,
                fill: "#fff",
                radius: 4,
              },
            });
            group.addShape("image", {
              draggable: true,
              attrs: {
                x: 2,
                y: 2,
                width: 40,
                height: 40,
                img: model.img,
              },
            });
            return keyShape;
          },
          getCustomConfig(model) {
            console.log(model);
            return {
              size: [40, 40],
              wrapperStyle: {
                fill: "#FFF",
              },
            };
          },
          getAnchorPoints() {
            return [
              [0.5, 0],
              [0.5, 1],
              [0, 0.5],
              [1, 0.5],
            ];
          },
        }}
        extend="single-shape"
      />
      <RegisterNode
        name="customStartNode"
        config={{
          getCustomConfig(model) {
            return {
              size: [80, 40],
              wrapperStyle: {
                fill: "#5E6A7D",
              },
              contentStyle: {
                fill: "#5E6A7D",
              },
              labelStyle: {
                fill: "#FFFFFF",
              },
            };
          },
          getAnchorPoints() {
            return [
              [0.5, 0],
              [0.5, 0.5],
              [0.5, 1],
              [0, 0.5],
              [1, 0.5],
            ];
          },
        }}
        extend="bizFlowNode"
      />
      <RegisterNode
        name="customInternalNode"
        config={{
          setState(name, value, item) {
            setAnchorPointsState.call(
              this,
              name,
              value,
              item,
              (item, anchorPoint) => {
                const { width, height } = item.getKeyShape().getBBox();

                const [x, y] = anchorPoint;

                return {
                  x: width * x - width / 2,
                  y: height * y - height / 2,
                };
              },
              (item, anchorPoint) => {
                const { width, height } = item.getKeyShape().getBBox();

                const [x, y] = anchorPoint;

                return {
                  x: width * x - width / 2,
                  y: height * y - height / 2,
                };
              }
            );
          },
          getAnchorPoints() {
            return [
              [0.5, 0],
              [0.5, 1],
              [0, 0.5],
              [1, 0.5],
            ];
          },
        }}
        extend="rect"
      />
    </GGEditor>
  );
}

export default GGEditorWrap;
