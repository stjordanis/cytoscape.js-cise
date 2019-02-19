function CiSEInterClusterEdgeInfo(edge, angle)
{
    // Inter-cluster edge
    this.edge = edge;

    // Angle in radians (in clockwise direction from the positive x-axis) that
    // is computed for this inter-cluster edge based on the line segment with
    // one end as the center of the associated cluster and the other end being
    // the center of the source/target node of this inter-cluster edge that is
    // not in this cluster.
    this.angle = angle;
}

CiSEInterClusterEdgeInfo.prototype = Object.create();

CiSEInterClusterEdgeInfo.prototype.getEdge = function()
{
    return this.edge;
};

CiSEInterClusterEdgeInfo.prototype.getAngle = function()
{
    return this.angle;
};

module.exports = CiSEInterClusterEdgeInfo;
