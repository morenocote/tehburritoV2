import { useState, useEffect } from "react";
import { MenuCategory, MenuItem } from "@/data/menuData";

interface ApiCategory {
    cat_id: string;
    cat_nombre: string;
    cat_i: string;
    cat_estado: string;
}

interface ApiProduct {
    pro_ref: string;
    cat_id: string;
    pro_nombre: string;
    pro_precio: string;
    pro_img: string;
    pro_contenido: string;
    pro_cantidad: string;
    pro_activo: string;
}

export const useMenu = () => {
    const [menu, setMenu] = useState<MenuCategory[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                setLoading(true);

                // 1. Fetch Categories
                const categoriesResponse = await fetch("https://dashboard.theburritomexicanfood.com/api/categorias/categorias.php?peticion=verON");
                if (!categoriesResponse.ok) throw new Error("Error fetching categories");
                const categoriesData: ApiCategory[] = await categoriesResponse.json();

                // 2. Fetch Products
                const formData = new FormData();
                formData.append("texto", "");

                const productsResponse = await fetch("https://dashboard.theburritomexicanfood.com/api/productosFiltro/productos.php?r=filtro", {
                    method: "POST",
                    body: formData
                });
                if (!productsResponse.ok) throw new Error("Error fetching products");
                const productsData: ApiProduct[] = await productsResponse.json();

                // 3. Map Data
                const mappedMenu: MenuCategory[] = categoriesData.map(category => {
                    const categoryProducts = productsData.filter(product => product.cat_id === category.cat_id);

                    const items: MenuItem[] = categoryProducts.map(product => ({
                        name: product.pro_nombre,
                        price: `$${product.pro_precio}`,
                        description: product.pro_contenido,
                        image: `https://dashboard.theburritomexicanfood.com/assets/img/productos/${product.pro_img}`
                    }));

                    return {
                        id: category.cat_id,
                        name: category.cat_nombre,
                        description: "", // API doesn't provide category description
                        items: items
                    };
                });

                // Filter out empty categories if desired, or keep them
                setMenu(mappedMenu);

            } catch (err: any) {
                setError(err.message || "Error lading menu data");
                console.error("Error fetching menu:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchMenuData();
    }, []);

    return { menu, loading, error };
};
