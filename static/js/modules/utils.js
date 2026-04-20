function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    // Fixed: Use UTC options to avoid time-zone shifts
    return date.toLocaleDateString('en-US', { 
        month: 'short', 
        year: 'numeric', 
        timeZone: 'UTC' 
    });
} 