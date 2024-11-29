<script>
    export let expense;

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-ZA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
    }
</script>

<li>
    <p>
        <strong>
            {formatDate(expense.date)}
        </strong>
    </p>
    <p>
        {expense.title}: <strong>R{expense.amount}</strong>
    </p>
    <p>{expense.description}</p>
</li>
