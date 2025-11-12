// MenuFormPage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMenuContext } from "./App";
import type { Dish } from "./useMenu";

export function MenuFormPage() {
  const { addDish, updateDish, menuData, deleteDish } = useMenuContext();
  const navigate = useNavigate();
  const params = useParams();
  const { category: urlCategory, id: urlId } = params;

  const [initial, setInitial] = useState<Dish | null>(null);

  useEffect(() => {
    if (urlCategory && urlId) {
      const cat = urlCategory as keyof typeof menuData;
      const found = menuData[cat].find((d) => d.id === urlId) || null;
      setInitial(found);
    } else {
      setInitial(null);
    }
  }, [urlCategory, urlId, menuData]);

  const [form, setForm] = useState<Dish>(() =>
    initial || {
      id: Date.now().toString(),
      name: "",
      description: "",
      price: "",
      image: "",
      category: (urlCategory as any) || "starters",
    }
  );

  useEffect(() => {
    if (initial) {
      setForm(initial);
    } else if (!urlCategory) {
      setForm({
        id: Date.now().toString(),
        name: "",
        description: "",
        price: "",
        image: "",
        category: "starters",
      });
    }
  }, [initial, urlCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (initial) {
      updateDish(form);
    } else {
      addDish(form);
    }
    navigate("/");
  };

  const handleDelete = () => {
    if (!initial) return;
    deleteDish(initial.id, initial.category);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-amber-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded shadow p-6">
        <h2 className="text-xl font-semibold mb-4">{initial ? "Edit Dish" : "Add New Dish"}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm text-amber-700">Name</span>
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border px-2 py-2 rounded" />
          </label>

          <label className="block">
            <span className="text-sm text-amber-700">Description</span>
            <textarea required value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full border px-2 py-2 rounded" />
          </label>

          <label className="block">
            <span className="text-sm text-amber-700">Price (e.g., R120)</span>
            <input required value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full border px-2 py-2 rounded" />
          </label>

          <label className="block">
            <span className="text-sm text-amber-700">Image URL</span>
            <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full border px-2 py-2 rounded" />
          </label>

          <label className="block">
            <span className="text-sm text-amber-700">Category</span>
            <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as Dish["category"] })} className="w-full border px-2 py-2 rounded">
              <option value="starters">Starters</option>
              <option value="mains">Mains</option>
              <option value="desserts">Desserts</option>
              <option value="drinks">Drinks</option>
            </select>
          </label>

          <div className="flex gap-3 justify-end">
            {initial && (
              <button type="button" onClick={handleDelete} className="px-3 py-2 bg-red-600 text-white rounded">
                Delete
              </button>
            )}
            <button type="submit" className="px-4 py-2 bg-amber-600 text-white rounded">
              {initial ? "Save Changes" : "Add Dish"}
            </button>
            <button type="button" onClick={() => navigate("/")} className="px-3 py-2 border rounded">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

