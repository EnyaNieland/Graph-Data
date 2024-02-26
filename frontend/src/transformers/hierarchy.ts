import type { GraphNode } from "@/models/data.dto";

export default function transformHierarchy(nodes: GraphNode[]): GraphNode | undefined {
    const root = nodes.find((x) => x.parent === "");

    if(!root) return;

    const assignChildren = (current: GraphNode): GraphNode[] => {
        const children = nodes.filter((x) => x.parent === current.name);
        children.map((x) => {
            x.children = assignChildren(x);
        });
        return children;
    }

    root.children = assignChildren(root);
    return root;
}

