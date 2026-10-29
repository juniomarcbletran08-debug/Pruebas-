import { describe, expect, it } from 'vitest';
import { categories, initialProducts } from './data';

describe('IRONVAULT catalog seed', () => {
  it('includes all requested catalog categories', () => {
    expect(categories).toContain('Herramientas manuales');
    expect(categories).toContain('Seguridad industrial');
    expect(categories).toContain('Repuestos y accesorios');
  });
  it('provides uniquely identified, reviewable demo products', () => {
    expect(initialProducts.length).toBeGreaterThanOrEqual(20);
    expect(new Set(initialProducts.map(p => p.id)).size).toBe(initialProducts.length);
    expect(initialProducts.every(p => p.name && p.brand && p.model && p.ref && p.category && p.price >= 0)).toBe(true);
  });
  it('has no hidden/unapproved products in the initial seed', () => {
    expect(initialProducts.every(p => p.approved === true)).toBe(true);\n    expect(initialProducts.every(p => p.brand.includes('Demo') || p.id.startsWith('iv-'))).toBe(true);
  });
});
