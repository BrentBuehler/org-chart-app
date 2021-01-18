class NodesController < ApplicationController
  def index
    all_nodes = Node.all
    respond_to do |format|
      format.html { render html: "There are #{all_nodes.count} nodes" }
      format.json { render json: all_nodes }
    end
  end

  def update
    node = Node.find(params[:id])

    node.update_attributes(parent_id: params[:parent_id]) if node.id != params[:parent_id]

    all_nodes = Node.all
    render json: all_nodes
  end
end
