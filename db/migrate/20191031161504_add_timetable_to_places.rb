class AddTimetableToPlaces < ActiveRecord::Migration[6.0]
  def change
    add_column :places, :timetable, :string
  end
end
