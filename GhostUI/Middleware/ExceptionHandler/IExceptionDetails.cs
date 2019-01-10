namespace GhostUI.Middleware
{
    public interface IExceptionDetails
    {
        int    StatusCode { get; set; }
        string Message    { get; set; }
        string ToString();
    }
}
