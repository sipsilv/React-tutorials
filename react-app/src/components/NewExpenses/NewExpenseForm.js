import "./NewExpenseForm.css";
export default function NewExpenseForm() {
  <div>
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input type="number" min="0.0" step="0.1" />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input type="date" min="2019-01-01" max="2034-01-01" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" />
      </div>
    </form>
  </div>;
}
