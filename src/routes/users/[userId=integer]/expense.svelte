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

    const removeExpense = async () => {
        try {
            const response = await fetch('/api', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: expense._id })
		    });

            const result = await response.json();
            console.log('Delete result:', result);
        } catch (error) {
             console.error('Error removing expense:', error);
        }
    }
</script>

<li>
    <p>
        <strong>
            {formatDate(expense.date)}
        </strong>
    </p>
    <p>
        { expense._id }
    </p>
    <p>
        {expense.title}: <strong>R{expense.amount}</strong>
    </p>

    <p>{expense.description}</p>

    <button on:click={removeExpense}>delete</button>

    <hr style="width: 50%; margin-left: 0;"/>
</li>
