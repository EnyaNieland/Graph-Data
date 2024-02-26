export interface GraphDataResponse {
    data: GraphNode[]
}

export interface GraphNode {
    name: string,
    description: string,
    parent: string
    children?: GraphNode[]
}