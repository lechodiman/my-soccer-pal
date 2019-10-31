class AddPhone2ToPlaces < ActiveRecord::Migration[6.0]
  def change
    add_column :places, :phone_2, :string
  end
end
