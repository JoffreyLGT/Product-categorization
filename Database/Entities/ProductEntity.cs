namespace Database.Entities;

/// <summary>
///     Product sold on an e-commerce platform.
/// </summary>
public class ProductEntity : BaseEntity
{
    /// <summary>
    ///     Unique identifier of the product.
    /// </summary>
    public long Id { get; set; }

    /// <summary>
    ///     Short sentence to designate the product.
    /// </summary>
    public string? Designation { get; set; }

    /// <summary>
    ///     Short description of the product.
    /// </summary>
    public string? Description { get; set; }

    /// <summary>
    ///     Name of the product image file.
    /// </summary>
    public string? ImageName { get; set; }

    /// <summary>
    ///     Category of the product.
    /// </summary>
    public CategoryEntity Category { get; set; }
}