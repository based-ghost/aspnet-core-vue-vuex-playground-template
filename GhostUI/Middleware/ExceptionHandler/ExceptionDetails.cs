using Newtonsoft.Json;

namespace GhostUI.Middleware
{
    public class ExceptionDetails : IExceptionDetails
    {
        public int    StatusCode { get; set; }
        public string Message    { get; set; }

        public override string ToString() => JsonConvert.SerializeObject(this);
    }
}
