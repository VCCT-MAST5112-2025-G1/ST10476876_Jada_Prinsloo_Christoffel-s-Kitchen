// MenuFormModal.tsx
import React, { useEffect, useState } from "react";
import { Dish } from "./useMenu";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MenuFormModalProps {
  isOpen: boolean;
  dish?: Dish | null;
  onClose: () => void;
  onSave: (dish: Dish) => void;
  onDelete?: (dishId: string, category: Dish["category"]) => void;
}

export function MenuFormModal({ isOpen, dish, onClose, onSave, onDelete }: MenuFormModalProps) {
  const [formData, setFormData] = useState<Dish>(() =>
    dish || {
      id: Date.now().toString(),
      name: "",
      description: "",
      price: "",
      image: "",
      category: "starters",
    }
  );

  useEffect(() => {
    if (dish) setFormData(dish);
  }, [dish]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleDelete = () => {
    if (dish && onDelete) {
      onDelete(dish.id, dish.category);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" onClick={onClose}>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-lg shadow p-6 w-full max-w-md"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-amber-800">{dish ? "Edit Dish" : "Add Dish"}</h3>
            <button onClick={onClose}><X /></button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-sm text-amber-700">Dish Name</label>
              <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border px-2 py-1 rounded"/>
            </div>

            <div>
              <label className="block text-sm text-amber-700">Description</label>
              <textarea required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full border px-2 py-1 rounded"/>
            </div>

            <div>
              <label className="block text-sm text-amber-700">Price (e.g., R120)</label>
              <input required value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} className="w-full border px-2 py-1 rounded"/>
            </div>

            <div>
              <label className="block text-sm text-amber-700">Image URL</label>
              <input value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="w-full border px-2 py-1 rounded"/>
            </div>

            <div>
              <label className="block text-sm text-amber-700">Category</label>
              <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value as Dish["category"] })} className="w-full border px-2 py-1 rounded">
                <option value="starters">Starters</option>
                <option value="mains">Mains</option>
                <option value="desserts">Desserts</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            <div className="flex gap-2 justify-end pt-2">
              {dish && onDelete && <button type="button" onClick={handleDelete} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>}
              <button type="submit" className="bg-amber-600 text-white px-4 py-1 rounded">{dish ? "Save" : "Add Dish"}</button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

