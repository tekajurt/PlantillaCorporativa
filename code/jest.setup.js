import '@testing-library/jest-dom';

// Mock window.scrollTo for JSDOM
Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });
