export const Validate = (setValidMessageName: (args: string | null) => void, setValidMessagePhone: (args: string | null) => void) => {
    const validateName = (value: string): void => {
        const regex = /\d/g;

        if (regex.test(value)) {
            setValidMessageName('Only letters allowed');
        } else if (!value.trim()) {
            setValidMessageName('This field in required');
        } else {
            setValidMessageName(null);
        }
    };

    const validatePhone = (value: string): void => {
        const regex = /^\d+$/;

        if (!value.trim()) {
            setValidMessagePhone('This field in required');
        } else if (!regex.test(value)) {
            setValidMessagePhone('Only numbers allowed');
        } else if (value.length > 12 || value.length < 12) {
            setValidMessagePhone('Should contain 12 characters');
        } else {
            setValidMessagePhone(null);
        }
    };

    return [validateName, validatePhone];
}