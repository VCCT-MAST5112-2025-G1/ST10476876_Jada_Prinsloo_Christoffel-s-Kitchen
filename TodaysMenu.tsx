// TodaysMenu.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMenuContext } from "./App";
import { Card, CardContent } from "./ui/card"; // your existing UI component
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import { AveragePrice } from "./AveragePrice";

export function TodaysMenu() {
  const { menuData, deleteDish } = useMenuContext();
  const navigate = useNavigate();

  const onEdit = (dishId: string, category: string) => {
    navigate(`/edit/${category}/${dishId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-amber-800">Today's Menu</h2>
          <div className="flex gap-3">
            <Link to="/add" className="bg-amber-600 text-white py-2 px-4 rounded">
              Add Dish
            </Link>
            <Link to="/changelog" className="bg-white py-2 px-4 rounded border">
              Change Log
            </Link>
          </div>
        </div>

        <AveragePrice />

        <section className="mt-6 grid gap-6">
          {(["starters", "mains", "desserts", "drinks"] as const).map((cat) => (
            <div key={cat}>
              <h3 className="text-lg font-semibold text-amber-800 mb-3 capitalize">{cat}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {menuData[cat].map((dish) => (
                  <Card key={dish.id} className="p-3">
                    <CardContent className="flex gap-3 items-start">
                      <div className="w-20 h-20 rounded overflow-hidden">
                        <ImageWithFallback src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-amber-800">{dish.name}</h4>
                            <p className="text-sm text-amber-700 line-clamp-2">{dish.description}</p>
                          </div>
                          <div className="text-orange-600 font-medium">{dish.price}</div>
                        </div>

                        <div className="mt-3 flex gap-2">
                          <button onClick={() => onEdit(dish.id, cat)} className="px-3 py-1 border rounded flex items-center gap-2">
                            <Edit className="w-4 h-4" /> Edit
                          </button>
                          <button
                            onClick={() => deleteDish(dish.id, cat)}
                            className="px-3 py-1 bg-red-600 text-white rounded flex items-center gap-2"
                          >
                            <Trash2 className="w-4 h-4" /> Delete
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {menuData[cat].length === 0 && <div className="text-sm text-neutral-500">No items.</div>}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

